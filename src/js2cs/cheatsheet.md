# Cheatsheet



Getter setter

```c#
// public get, private set, with default value 
public String content { get; private set; } = String.Empty;

// Variable lengh arguments
public static string LinesOf(params string[] str)
{
  return  string.Join(Environment.NewLine, str);
}

```



Mocking

```c#
var mock = new Mock<ICommand>();

// For any input string
mock.Setup(
  c => c.Execute(It.IsAny<string>())
).Returns(
  (string input) => input + $"{input} executed"
);
```



```c#
// Assert should throw exception
Assert.Throws<CandBeDoneException>(() => DoSomething());

```



```c#
// Null Coalecing with option chain
return matchedCommand?.Execute(input) ?? "no result";

// Map and join values
String.Join(Environment.NewLine, commands.Select(c => c.Usage()))

// Check if aray contains
Children.Contains(person)
```



### regex

```c#
// Namespace for Regex classs
using System.Text.RegularExpressions;

// Check if  a string matches a pattern
Regex regex = new Regex("pattern");
regex.IsMatch(str);

// Named regex params
Regex pattern = new Regex("(?i)caseIgnored(?-i)\\s*=\\s*(?<valuename>[a-z]+)")
Match match = pattern.Match(input);
string personId = match.Groups["personId"].Value;
string relation = match.Groups["relation"].Value;

// Replace regex
Regex.Replace("my name", "n..e", "identity")
```



### Arrays

```c#
// Slicing array 
array[fromIndex..toIndex]; // excludes toIndex, includes fromIndex

// Without first element 
array[1...];

// map array
var ages = people.Select(person => person.Age).ToArray();

// Reduce array
var sumOfAges = people.Aggregate(0, (sum, p) => sum + p.Age));

// Find in array
var adults = people.Where(p => p.Age > 18);

// First element (throws error if no elements)
var first = people.First();

// First or default 
var firstOrNull = people.FirstOrDefault();

// Sort Array
var sorted = people.OrderBy(p => p.Age);

// Concatenate arrays
var mergedArray = arrayOne.Union(arrayTwo).ToArray();

```



### Collections

- List

  ````c#
  // Create list intline 
  new List<Todo>(){
    new Todo() {Id = 1, Name = "item one", IsComplete = true},
    new Todo() {Id = 1, Name = "item one", IsComplete = true}
  }
  
  // Dictionaroies
  var days = new Dictionary<string, string> { 
    ["mo"] =  "Monday", 
    ["tu"] =  "Tuesday", 
    ["we"] =  "Wednesday", 
    ["th"] =  "Thursday", 
    ["fr"] =  "Friday", 
    ["sa"] =  "Saturday", 
    ["su"] =  "Sunday"
  };
  
  // Shorthand for arrays 
  Person [] array = {personOne};// Same as var array = new Person[]{personOne};
  
  
  ````



```c#
// Exceptions

// Catch exceptoins without getting reference to object
try{
	// ...
}Catch(PersonNotFoundException){ // no reference to exception
	// ...
}
```



```c#
// do not need to declare private variable, directly assign in constructor
public class FindRelative : ICommand
{
  
}
```



### Extensions

```
//Add an extension method to an existing class

```



Environment Variables

```c#
// Get environmnt variable 
Environment.GetEnvironmentVariable("PATH");

// Ger processor count
Environment.ProcessorCount
  
// Get os 
Environment.OSVersion // return "Unix 19.3.0.0" for catalina
```



Typechekc and typecast

```c#
// as operator
Person p = obj as Person ; // returns null if obj is not Person type

// is operator with patttern matching
public override bool Equals(object? obj)
{
  // Checks type and assigns value
  if (obj is Person that)
  {
    return that.Id == Id;
  }

  return false;
```



File System

```c#
using System.IO; 
using static System.Console; 
using static System.IO.Directory; 
using static System.IO.Path; 
using static System.Environment;

// Path separator 
System.IO.Path.DirectorySeparatorChar;

// Get User home
System.Environment.GetFolderPath(Environment.SpecialFolder.Personal);

// Get Temp directory
System.IO.Path.GetTempPath();
  
// Get current directory
System.Environment.CurrentDirectory

// Combile path
Console.WriteLine(Path.Combine(homePath, "Dir", "SubDir", "myFile"));

// Check directory exists 
Directory.Exists(path);

// Check file exists (returns fale if path is directory)
File.Exists(path);

// Get directory container a file 
Path.GetDirectoryName(filePath);

// Get file name
Path.GetFileName(filePath);


```



Reading a file 

```c#
// Read text file by line
using (System.IO.StreamReader file =
       new System.IO.StreamReader(filePath))
{
  string line;
  while((line = file.ReadLine()) != null)  
  {
    Console.WriteLine(line);
  }  
}
```



```c#
// Async code
public static async Task Main(string[] args)
{
  Console.WriteLine("before task");
  var task = Task.Run(() =>{
    Console.WriteLine("In the task");
  });
  await task;
  Console.WriteLine("after task");
}
```



Writting to a file 

```

```



### JSON

```
# Best json API : Newtonsoft.Json
# JSON to dictionary : 

```



### Build

  ```xml
  <!-- Copy files static/file.json to bin/Debug/static/file.json -->
  <ItemGroup>
    <Content Include="static/**">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </Content>
  </ItemGroup>

  <!-- Create empty static/ folder to bin/Debug/ if no files in static-->
  <Target Name="CreateAppDataFolder" AfterTargets="AfterPublish">
    <MakeDir Directories="$(PublishDir)AppData" Condition="!Exists('$(PublishDir)AppData')" /> 
  </Target>


  ```



### Install nuget locally

```bash
#On Linux, with NuGet CLI, the commands are similar. To install my.nupkg, run
nuget add -Source some/directory my.nupkg
nuget add -Source some/directory my.nupkg

# add that directory as a NuGet source
sources Add -Name MySource -Source some/directory

#/p:RestoreSources=MySource
dotnet build /p:RestoreSources=MySource
```




Commands

|                                                    |                                                              |      |
| -------------------------------------------------- | ------------------------------------------------------------ | ---- |
| add package                                        | `dotnet add package <name>`                                  |      |
| add package                                        | `dotnet add <projec/path>.csproj package <name>`             |      |
| Create solution file                               | `dotnet new sln -0 solution-name`                            |      |
| Create class lib                                   | `dotnet new classlib -o LibName`                             |      |
| Add proejct to solution                            | `dotnet sln add ./project/project.csproj`                    |      |
| Add reference proj as dependency to another csproj | `dotnet add <current>.csproj reference path/to/<other>.csproj` |      |
| List packages and target version                   | `dotnet list . package`                                      |      |
| List referenced projects                           | `dotnet list . reference`                                    |      |
| Remove reference or Nuget                          | `donet remove`                                               |      |
| download dependencies of the project               | `dotnet restore`                                             |      |
| compile the project                                | `dotnet build`                                               |      |
| run unit tests                                     | `dotnet test`                                                |      |
| Run the project                                    | dotnet run                                                   |      |
| Create nuget package for project                   | dotnet pack                                                  |      |
| publish to nuget repo                              | dotnet publish                                               |      |
| create publish directory with built assets         | `dotnet publish -c Release -o ./publish`                     |      |
| clear local nugets (sometimes to fix errors)       | dotnet nuget locals all -c                                   |      |
| run single test                                    | dotnet test --filter DisplayName=<namespace>.<testfile>.<methodname> |      |
| view current version                               | dotnet --version                                             |      |
| view available versions locally                    | dotnet --info                                                |      |
| set sdk core version                               | dotnet new globaljson --sdk-version 3.1.401                  |      |

