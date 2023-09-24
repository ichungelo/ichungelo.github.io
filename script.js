var wrapper = document.getElementById("contentList");
var content = [
    {
        "logo": "go.svg",
        "alt": "golang logo",
        "name": "Golang",
        "article": "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.",
        "example": `
package main

import "fmt"

func main() {
fmt.Println("Hello World")
}
`
    },
    {
        "logo": "java.svg",
        "alt": "java logo",
        "name": "Java",
        "article": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers.",
        "example": `
public class Main {

public static void main(String[] args) {
System.out.println("Hello World"); 
}

}`
    },
    {
        "logo": "js.svg",
        "alt": "js logo",
        "name": "Javascript",
        "article": "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
        "example": `
console.log('Hello World')
`
    },
    {
        "logo": "kotlin.svg",
        "alt": "kotlin logo",
        "name": "Kotlin",
        "article": "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps). Language development costs are borne by JetBrains, while the Kotlin Foundation protects the Kotlin trademark.",
        "example": `
fun main () {
println("Hello World")
}
`
    },
    {
        "logo": "php.svg",
        "alt": "php logo",
        "name": "PHP",
        "article": "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group. PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.",
        "example": `
echo "Hello World";
`
    },
    {
        "logo": "python.svg",
        "alt": "python logo",
        "name": "Python",
        "article": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a 'batteries included' language due to its comprehensive standard library.",
        "example": `
print("Hello World")
`
    },
    {
        "logo": "rust.svg",
        "alt": "rust logo",
        "name": "Rust",
        "article": "Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency. It enforces memory safety—ensuring that all references point to valid memory—without requiring the use of a garbage collector or reference counting present in other memory-safe languages. To simultaneously enforce memory safety and prevent data races, its 'borrow checker' tracks the object lifetime of all references in a program during compilation. Rust borrows ideas from functional programming, including immutability, higher-order functions, and algebraic data types. It is popular for systems programming.",
        "example": `
fn main() {
println!("Hello World");
}
`
    },
    {
        "logo": "swift.svg",
        "alt": "swift logo",
        "name": "Swift",
        "article": "Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in June 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as it had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It was built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms, it uses the Objective-C runtime library, which allows C, Objective-C, C++ and Swift code to run within one program.",
        "example": `
print("Hello World") 
`
    },
    {
        "logo": "ts.svg",
        "alt": "ts logo",
        "name": "Typescript",
        "article": "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.",
        "example": `
console.log('Hello World');
`
    },
];
var myHTML = '';
content.forEach((element, index) => {
    myHTML += `
    <button 
        type="button"
        onClick="clickEvent(${index})"
        style="background-color: white;
        border: 0ch;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;">
        <img style="margin: 10px;" src="assets/icons/${element.logo}" alt="${element.alt}" width="50">
    </button>
    `;

});
wrapper.innerHTML = myHTML

function clickEvent(index) {
    var article = document.getElementById("contentArticle");
    var aside = document.getElementById("contentAside");
    article.innerHTML = `
    <content>
    <h1 style="
    margin: 20px;
    font-family: Mooli, sans-serif;
    color: #00aeb4;
    ">
        ${content[index].name}
    </h1>
    <div style="
    border: rgb(214, 214, 214);
    border-style: solid;
    border-width: 1px;
    padding: 20px;
    border-radius: 20px;
    margin: 10px;
    ">
        <h2 style="
        padding: 10px;
        color: #00aeb4;
        ">
            Description
        </h2>
        <p style="
        text-align: justify;
        ">
            ${content[index].article}
        </p>
    </div>
    <div style="border: rgb(214, 214, 214);
    border-style: solid;
    border-width: 1px;
    padding: 20px;
    border-radius: 20px;
    margin: 10px;
    ">
        <h2 style="
        padding: 10px;
        color: #00aeb4;
        ">
            Code Example
        </h2>
        <pre>
            ${content[index].example}
        </pre>
    </div>
</content>
`;
    aside.innerHTML = `
        <img style="margin: 20px;" src="assets/icons/${content[index].logo}" alt="${content[index].alt}" width="180px">
    `;
    content[index].article;
}
