xTo know 

- what is inside a solution file ?
- what is inside an assembly file ? is it ILC or binary ?



- What is CLR
  
  - <span style="color: rgba(0,0,0,0.1)"> common language runtime, anologues of JVM. It is the Just in time compiler that intreprets the intermediate level code into machine code. So any machine that has a CLR can run compiled .NET code (ILC) </span>
  
- What is assembly ? 
  
  - <span style="color: rgba(0,0,0,0.1)">analygous of Jar, contains runnable libs built from a project</span>
  
- Is assembly one per namespace ?

- What is a solution file ? Is it suppose to be specific to a project ?
  
  - <span style="color: rgba(0,0,0,0.1)">it can contain multiple project</span>
  
- What is ILC ?
  
  - <span style="color: rgba(0,0,0,0.1)">intermediate language code, like bytecode C# is compiled to ILC and CLR interprets the ILC at runtime</span>
  
- What is the naming convention for constants in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">Pascal case e.g. int MaxValueSalary = 20;</span>
  
- How to decalre a float variable in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">float val = 0.2f; Just like java again</span>
  
- What is decimal type in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">Float is 4 bytes, double is 8 bytes and decimal is 16 bytes representation of real numbers in C#</span>
  
- What is the naming convention for methods in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">PascalCase unlike camel case in Java</span>
  
- Just like packages in Java, are namespace cosntrained by dir structure from project root ?
  
  - <span style="color: rgba(0,0,0,0.1)">No, name space are independent from dir structure</span>
  
- What are  **virtual method**s ?
  
  - <span style="color: rgba(0,0,0,0.1)">in C#, overriding depends on the type of reference teh variable holds. Unlike java, a supser class reference can also inovke overriden version of method, , if super class declares the methods using `virtual` keyword</span>
  
- Just like java.lang names space, System name space is auto imported in C#. True/False ?
  
  - <span style="color: rgba(0,0,0,0.1)">In C# we have to explicitly declare `using Systaem;` e.g if we need to use `Console.WriteLine('');`. False </span>
  
- What is the naming convention for interfaces in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">Interfaces are camel case, prefixed with an "I". e.g. IComparable</span>
  
- When to use camelCase vs TitleCase in C#?

  - <span style="color: rgba(0,0,0,0.1)">camel case only for private and local variables. Everything else is Title Case</span>

- How can you make sure C# throws error when a variable overflow ?

- What is a `checked` block in C# ?
  
  - <span style="color: rgba(0,0,0,0.1)">A checked block throws exception if overflow occurs for a vairbale within the block scope</span>
  
- Name all the 9 primitive types in C#.
  
  - <span style="color: rgba(0,0,0,0.1)">bool, byte, char, short, int, long, float, double, decimal</span>
  
- What is BCL ?
  
  - <span style="color: rgba(0,0,0,0.1)">Base class library is the standard library that comes with C#</span>
  
- What is GAC ?
  
  - <span style="color: rgba(0,0,0,0.1)">Global assembly cache : shared libs and version on every machine that has a CLR installed. (think of globally installed npm modules). It is recommened to use shared only when required. Is it cache of Nugets ? or does the lib mean more thant Nuget ?</span>
  
- What is CoreCLR ?
  
  - <span style="color: rgba(0,0,0,0.1)">.NET Core virtual machine, i. e. Version of CLR that comes with .NET core is called CoreCLR</span>
  
- What is CoreFX
  
  - <span style="color: rgba(0,0,0,0.1)">Set of libraries that come with .NET Core</span>
  
- What is Roslyn ?
  
  - <span style="color: rgba(0,0,0,0.1)">C# compiler used by `dotnet` tool. Compiles C# to Intermediate Level Code. Also comes as a nuget</span>
  
- What is **LINQ**
  
  - <span style="color: rgba(0,0,0,0.1)">Language INtegrated Quries, indroduced in C#3.0.  It adds support for declarative coding</span>
  
- Name all the types in C#.

  - <span style="color: rgba(0,0,0,0.1)">class, struct, enum, interface, or delegate.</span>

- What is the type of int in C# ?

  - <span style="color: rgba(0,0,0,0.1)">struct, class is Int32</span>

- How many keywords are there in C#

  - <span style="color: rgba(0,0,0,0.1)">Little over hundred</span>

- What are contextual keyword in C# ?

  <span style="color: rgba(0,0,0,0.1)">Keywords that are not reserved words. They have meaning in a context onlyw. E.g. Delegate</span>

- Every expression has a type in c# ? True/False ?

  - <span style="color: rgba(0,0,0,0.1)">True, both variables and expressions have a type</span>

- Boolean, Decimal e.t.c are implemented as Classes, True/False ?

  - <span style="color: rgba(0,0,0,0.1)">False, they are implemented as structs</span>

- What is difference between value types and reference types ?

  - <span style="color: rgba(0,0,0,0.1)">Reference types are allocated space in heap while value types in stack</span>

- What is the result of following : 

  ```c#
  object a = 21;
  object b = 22;
  Console.WriteLine(21 + 22);
  ```

- **What is the super class of Value types and Reference Types**

  - <span style="color: rgba(0,0,0,0.1)">System.Object</span> 

- When we say `type`, is it same as `class` in C# ?

  - <span style="color: rgba(0,0,0,0.1)">No, type are like class, interface, deleegate, struct, enum</span> 

- On a 64 bit machine, adding of int will be faster than decimal. True/False ?

  - <span style="color: rgba(0,0,0,0.1)">False (though unintuitive)</span> 

- What is a literal value ?

  - <span style="color: rgba(0,0,0,0.1)">notation that represetnts a fixed value, integer, float, binary, hexadecimal, char, string, boolean</span> 

- What are **verbatim strings** in C# ?

  - <span style="color: rgba(0,0,0,0.1)">used to ignore escapre characters in stings , e.g. @"c:\fileone\file-2" is equivalent to "c:\\fileone\\file2" </span> 

- What is meaning of `@` keyword in c# ?

  - <span style="color: rgba(0,0,0,0.1)">When prefixed to a string, makes it verbatim</span> 

- What is uint type ?

  - <span style="color: rgba(0,0,0,0.1)">unsigned integer (+ve values only)</span> 

- What is the difference between number literals that start with `0b` vs `0x`

  - <span style="color: rgba(0,0,0,0.1)">0b is binary and 0x is hexadecimal</span> 

- Which is larger in C#, `double.MaxValue` or `decimal.maxValue`

  - <span style="color: rgba(0,0,0,0.1)">doubles are not accuratel and double.MaxValue is larger</span> 

- Whent to use `double` vs `decimal` ?

  - <span style="color: rgba(0,0,0,0.1)">doubles should not be used when comparison is rquired. Decimal should be used for comparisons </span> 

- What is wrong with below code ?

  ```c#
  pubilic bool isSalaryCorrect(employee, double approvedSalary){
  	double salaray = employee.annualSalary/12;
  	return approvedSalary == salaray;
  }
  ```

  - <span style="color: rgba(0,0,0,0.1)">doubles should not be used when we need to compare. in such cases decimal should be used.</span> 

- What is the literal for long ?
  
  - <span style="color: rgba(0,0,0,0.1)">L, e.g. 12121L, without L the number becomses an integer</span> 
  
- - <span style="color: rgba(0,0,0,0.1)">No, only for local variables</span> 

- What is `default()` operator ? 
  
  - <span style="color: rgba(0,0,0,0.1)">to get default value of types e.g. default(DateTime), default(int)</span> 
  
- Can we use var to declare public variable ?

  - <span style="color: rgba(0,0,0,0.1)">no only local variable</span> 

- Can we disable null reference pointer in C# ?

  - <span style="color: rgba(0,0,0,0.1)">yes c# allows enabling/disabling null pointer reference at projec tor file level</span> 

- What is the `1.2M` literal mean ?
  
  - <span style="color: rgba(0,0,0,0.1)">M literal is for decimal `4.32m` an d`1.2M` both mean decimal</span> 
  
- How to write a template string in C# ? 
  
  - <span style="color: rgba(0,0,0,0.1)">`$"{variableOne} is one and {variableTwo} is two"`/span> 
  
- How to read a line in C# ? 

  - <span style="color: rgba(0,0,0,0.1)">`string input = Console.ReadLine()`</span> 

- Which exceptions indicates that a platform lacks the feature of C# we tried to use 

  - <span style="color: rgba(0,0,0,0.1)">PlatformNoSupportedException`</span> 

- What is sbyte type ?

  - <span style="color: rgba(0,0,0,0.1)">Signed Byte. `byte` stores 0-255 while `sbyte` stores -128 to 127 </span> 

- What will be result of following : 

  ```c#
  public static DateTime? getADay(bool today){
    DateTime result = null;
    if(today){
    	result = DateTime.Today;
    } else{
    	result = new DateTime();
    }
    return result;
  }
  ```

  <span style="color: rgba(0,0,0,0.1)">DateTime is non nullable </span> 

- What is the difference between casting and converting in C#

  <span style="color: rgba(0,0,0,0.1)">when casting double to int, casting will remove teh part after `.` while `Sytate.Convert.ToInt32()` will round off </span> 

- How can you roundof a decimal value into a long value ?

  - <span style="color: rgba(0,0,0,0.1)">System.Convert.ToInt64(1.5m);</span> 

- How can you roundof a decimal value into a long value ?

  - <span style="color: rgba(0,0,0,0.1)">System.Convert.ToInt64(1.5m);</span> 

- Show two different ways of coverting string "true" to boolean variable

  - <span style="color: rgba(0,0,0,0.1)">`Boolean.Parse("true")`, `System.Convert.ToBoolean("true")`</span> 

- How can you create and parse Base64 strings in c# ?
  
  - <span style="color: rgba(0,0,0,0.1)">System.Convert.ToFase64String and System.Convert.FromBase64String</span>
  
- 

- What happends if overrides is used without `virtual` in super class ?

  - <span style="color: rgba(0,0,0,0.1)">compile error</span>

- Rewrite the following using shorter syntax of switch case

  ```c#
  switch(option){
  	case 3 : 
  		Console.WriteLine("it is three");
  		break;
  	case 1 : 
  		Console.WriteLine("it is one");
  		break;
  	default :
  		Console.WriteLine("neighter three or one");
  		break;
  }
  ```

  - <div style="opacity: 0.1">
      ```
      Console.WriteLine(option switch{
        3 => "it is three",
        1 => "it is one",
        _ => "neighter three or one",
      });
      ```
    </div>

- How do you create a new solution with dotnet command ?

  - <span style="color: rgba(0,0,0,0.1)">`dotnet new sln -o solution-name`</span>

- How can you add a <other> project to <current> as reference library ?

  -  <span style="color: rgba(0,0,0,0.1)">`dotnet add <current>.csproj reference path/to/<other>.csproj  `</span>

- What is the difference between `[Fact]` and `[Theory]` in XUnit test file ?
  
  - <span style="color: rgba(0,0,0,0.1)">Fact is alwasy right, Theory is right for a set of data</span>
  
- What is the difference between `String` and `string` ?

  - <span style="color: rgba(0,0,0,0.1)">string is a reference to Syste.String. They do exact same thing. String needs System namespace to be imported</span>

- what is an assembly ? is it different from a Nuget package ?
  
  - <span style="color: rgba(0,0,0,0.1)">Package can contain multiple assemblies. Assembly are dll files stored on disk that can be used as class libraries.</span>
  
- What is the C# class for `int` `float`, `short` `decimal`and `long`? 
  
  - <span style="color: rgba(0,0,0,0.1)">`System.Int32` - int, `System.Int16` - short, `Syste.Int64` -long, `Syste.Decimal` -decimal, `System.Single` - float, </span>
  
- What is .NET standard ?
  
  - <span style="color: rgba(0,0,0,0.1)">A standard that any C# platform has to comply to . Deines what assemblies can be used on any specific platform.</span>
  
- How to create a Nuget package from the current classlib project ? 
  
  - <span style="color: rgba(0,0,0,0.1)">`dotnet pack`</span>
  
- How to download the dependencies of a project ?
  
- <span style="color: rgba(0,0,0,0.1)">`dotnet restore`</span>
  
- How to compile of a project ?
  
  - <span style="color: rgba(0,0,0,0.1)">`dotnet build`</span>
  
- What is solution file used for ? Can a project work without a solution file ?

  - <span style="color: rgba(0,0,0,0.1)">Yes, it is optional. It is used for working with multipe projects. e.g. load muliple projects in IDE by loading the solutions file or run a `dotnet build` command for multiple project by running in solution directory. It can also be configured for building/deploying multiple projects at once</span>

- Does async method run in a different thread to ensure parallelism ?

  - <span style="color: rgba(0,0,0,0.1)">no, asyn await do not create additional threads</span>

- Which name spaces contain IO related classes ?

  - <span style="color: rgba(0,0,0,0.1)">System and System.IO</span>
  
- How can I use the `as` expression to typecheck and typecast as the same time ?

  - <span style="color: rgba(0,0,0,0.1)">if(obj is Person that)</span> 

- Can same attribute be applied on a type more than once ?

  - <span style="color: rgba(0,0,0,0.1)">Yes, if we want it with different parameters. e.g. `[Conditional("DEBUG"), Conditional("TEST1")] void TraceMethod(){}`</span> 

- Consider following : 

  ```c#
  using System;
  using System.Linq;
  using System.Collections.Generic;
                      
  public class Program
  {
      static IList<string> processed = new List<string>();
      
      public static void Main()
      {
          var input = GetInputs().Select(Transform);
          Console.WriteLine("Before : " + string.Join(", ", processed));
          Console.WriteLine("Result : " + string.Join(", ", input));
          Console.WriteLine("After  : " + string.Join(", ", processed));
      }
      static IEnumerable<string> GetInputs(){ return new List<string>(){"one", "two", "three"};}
      static string Transform(string input){ 
          string output = $"processed-{input}";
          processed.Add(output);
          return output;
      }
  }
  ```

  The output for this program is 

  ```
  Before : 
  Result : processed-one, processed-two, processed-three
  After  : processed-one, processed-two, processed-three
  ```

  Explain what might be going on here.

  - <span style="color: rgba(0,0,0,0.1)">Linq defers  the funtion execution till result is consumed. So Select is not right place for side effects.</span>





- What will be result of following : 

  ```c#
  using System;  
    
  class SuperClass  
  {     
    public void methodOne()  
    {  
      Console.WriteLine("method one from super class");  
    }  
    
    public virtual void methodTwo()  
    {  
      Console.WriteLine("method two from super class");  
    }  
  }   
    
  class SubClass : SuperClass  
  {  
    public void methodOne()  
    {  
      Console.WriteLine("method one from sub class");  
    }  
    
    public override void methodTwo()  
    {  
      Console.WriteLine("method two from sub class");  
    }
  }   
    
  class Program  
  {  
    static void Main(string[] args)  
    {  
      SubClass subRef  = new SubClass();  
      SuperClass superRef = subRef;
  
      subRef.methodOne();
      subRef.methodTwo();  
      
      superRef.methodOne();  
      superRef.methodTwo();  
    }         
  }
  
  // method one from sub class
  // method two from sub class
  
  // method one from super class
  // method two from sub class
  ```

  - <span style="color: rgba(0,0,0,0.1)">'// method one from sub class, method two from sub class, method one from super class, method two from sub class'</span>

