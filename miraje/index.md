# Miraje



### Next steps

- [ ] Add proto file to node app dynamically

- [ ] respond for stream dynamically

  



- Read file from `./replies`, config from `./config`, extensions from `./ext`

  ```bash
  npx miraje -port 3002 -config ./config -reply ./replies -ext ./ext
  ```

- Run with default 

  ```bash
  npx miraje -port 3002
  ```

- record and playback 

  ```bash
  npx miraje -record -server abc.com -port 3002 -config ./config -record ./recorded
  ```

  

- Kinds of gRPC API supported
  - single request- single response
  - single request - streaming response
  - streaming request - single response
  - streaming request - streaming response



### Configurations

| Name                    | default        |                             |
| ----------------------- | -------------- | --------------------------- |
| expressionSymbols       | `["{{", "}}"]` | e.g `{{request.body.name}}` |
| sessionEnabled          | `true`         |                             |
| special variable suffix | `/^@/`         | ends with `@`               |
|                         |                |                             |



### Variable

| Name          |                                                           | scope          |
| ------------- | --------------------------------------------------------- | -------------- |
| session       | shared across all requests in all files for all endpoints | global         |
| scope         | shared only for a single file                             | file           |
| endpoint      | shared across all files for same endpoint                 | endpoint       |
| stream.$index | the no or response in stream for current request          | request stream |

Request Response Mapping

**Single request - Single response**

```yaml
#./replies/hello-world/hello-world-one.js.yaml

# If no header or body sub child, request is assumed to be body descirption
# All fields are matched with requests field, if matched, reply is applied
request@ : {
	name: "@any"          # any value (regardless of type)
  lastName: /^Singh/    # regex field
  age : "@any"          # any value (integer in this case)
}

# Use Jeyson templates in replies
reply@ : {
	message : "hello {{request.body.name}}, your age is {{request.body.age}}. You asked me {{session.replyCount}} times"
	# Add snippet of js
  after@ : "
    	// Write any valid javascript here
    	if(!session.replyCount){
      	session.replyCount = 0;
      }
      session.replyCount++;

      /* Value updated in session object will be 
      ** available to all requests defined for all 
      ** protos, in all files.
      */			     
  "
}
```

**Single request - Stream response**

```yaml
#./replies/hello-world-stream/hello-world-stream-one.js.yaml

# If no header or body sub child, request is assumed to be body descirption
# if not field is defined, it is appplied to any request that has no other matches
request@ : {

}

# Use Jeyson templates in replies
reply@ : {
	stream@: [
    { message : "this is your first message"},
    { message : "this is your second message"},
   
    # include a template and pass parameters
    { 
    	include@ : "/shared/message-template.js.yaml", 
    	param@: {username: "{{request.body.name}}"}
    },
	],
	repeat@ # cyclically repeat responses (else ends after last item)
}
```

`/shared/message-template.js.yaml`

```yaml
{ 
	message : "message from shared template for {{param.username}}"
}
```



Stream request - Stream response : 

```yaml
request@ : {
	stream@: [
		{name: "first-user"},
    {name: "second-user"},
	]
}

@reply: {
		stream@: [
    { message : "odd hello  {{request.body.name}}"},
    { message : "even hello {{request.body.name}}"},
	],
	repeat@ # repeat cyclically
}

```



Streaming reply with pure js

```yaml
request@ : {
	stream@: [
		{name: "first-user"},
    {name: "second-user"},
	]
}

@reply: {
		stream@ : {
		js@: "
			endpoint.calls = endpoint.calls  || 0;
			endpoint.calls++;
			
      scope.calls = scope.calls  || 0;
      scope.calls++;

      var message = `
      	hello : ${request.body.name},
      	total calls to this endpoint : ${endpoint.calls},
      	total replies by this rule : ${scope.calls},
        sesquence in stream : ${stream.$index}
      `;

			return {message};
		"
  }
}
```

