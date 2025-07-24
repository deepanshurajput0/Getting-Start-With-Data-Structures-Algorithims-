# How Javascript Works Under the hood

## 1. JavaScript is Single-Threaded

    Only one task executes at a time.

    It uses something called the call stack to track function calls.

## 2. JavaScript Engine (e.g., V8)

The engine (like V8 in Chrome/Node.js) is what runs your JavaScript.
Major Components:

    Parser: Converts your code into tokens and checks for syntax errors.

    Abstract Syntax Tree (AST): A tree structure representing your code.

    Interpreter (Ignition): Converts AST into bytecode.

    Compiler (TurboFan): Optimizes and compiles hot code into machine code.

    Garbage Collector: Frees up unused memory.


    Great question! The **Global Execution Context** is one of the most fundamental concepts in how JavaScript runs your code.

---

## 🌍 What is the Global Execution Context (GEC)?

When you run any JavaScript file, the engine **creates a default environment** called the **Global Execution Context** — it’s where everything starts.

---

## 🔧 What happens in the Global Execution Context?

### ✅ Two Phases:

### 1. **Creation Phase**

* **Global Object** is created:

  * In browser → `window`
  * In Node.js → `global`
* **`this`** is set to the global object
* Memory is allocated for:

  * Variables (`var` is hoisted as `undefined`)
  * Functions (fully hoisted with body)

```js
var a = 10;
function greet() {
  console.log("Hello");
}
```

🔁 In memory phase:

* `a → undefined`
* `greet → function definition`

---

### 2. **Execution Phase**

* Values are assigned

  * `a → 10`
* Code is executed line by line

---

## 🧱 Where is GEC stored?

* It is **pushed to the Call Stack first**
* Every function you call creates its own **Function Execution Context** and gets pushed on top of GEC.

---

## 🧠 Visualization

```js
var name = "John";
function sayHi() {
  console.log("Hi " + name);
}
sayHi();
```

### Call Stack:

```
| sayHi() EC         |
| Global EC          |
```

---

## 🔄 Only One Global EC

There’s always only **one Global Execution Context** in any JS program — created once when your script starts.

---


### In Short:

| Element               | Value                        |
| --------------------- | ---------------------------- |
| Global Object         | `window` or `global`         |
| `this`                | Points to global object      |
| Variable Declarations | Hoisted as `undefined`       |
| Function Declarations | Hoisted with full definition |

---
![Screenshot 2025-06-12 142218](https://github.com/user-attachments/assets/4ee00fc2-e64e-4dc1-b5fd-25322f433426)



