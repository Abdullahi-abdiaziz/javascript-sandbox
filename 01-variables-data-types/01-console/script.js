// Log number
console.log(100); // 100
console.log(typeof (100)) // Number

// Log string
console.log('Hello World'); // Hello world

// Log multiple values
console.log(20, 'Hello', true); // 20 'hello true

// Log a variable
const x = 100;
console.log(x); // 100

// Console error & warning
console.error('Alert'); // Alert 
console.warn('Warning'); // Warning

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
