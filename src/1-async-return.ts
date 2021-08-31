function greet(): void {
  console.log("hello world"!);
}

async function promiseToGreet(): Promise<string> {
  console.log("hello world"!);
  return 'hello';
}

// greet();
// promiseToGreet()
// greet().then(() => console.log("CANNOT do this"));
promiseToGreet().then(() => console.log("CAN do this"));
