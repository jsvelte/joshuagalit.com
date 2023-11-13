---
title: 'Vericle Application | Middle Front End Software Developer - Work From Home'
publishedAt: 'Nov. 13, 2023'
summary: 'Application for my Mid Front End Software Developer - Work from Home Setup'
socialImage: /images/blog/4.png
tags:
  - exam
  - application
  - work-from-home
---

## 1. Which operating system(s) do you run at home?

- I am using `Windows 10` operating system in my computer with only `220SSD` for my bootable and `500GB` for my HDD storage

---

## 2. Please follow the plunker link and provide a written _code review_ for the sample code

```js
/** This should build a sentence and display it in the main browser window. */

var myStr = ''
first_part = 'I like to eat'

function GetSentence() {
  console.log('starting function')
  myStr = first_part
  console.log('so far so good')
  for (var i = 0; i < 3; i++) {
    var x = ['apples', 'bananas', 'cookies']
    myStr = myStr + ' ' + x[i] + ' '
    $('body').find('h1').text(myStr)
    console.log(myStr)
  }
}
GetSentence()
```

---

### Review:

#### 1. Variable Declaration:

- Declare variables using `const` or `let` to enhance code readability and prevent unintentional reassignments. For example, `first_part` should be declared using const or let.

```js
const first_part = 'I like to eat'
```

#### 2. Global Variables:

- Avoid using global variables unless necessary. In this case, it seems like `myStr` is intended to be a global variable. If it's only used within the function, consider declaring it inside the function to limit its scope.

#### 2. Logging:

- Logging is a good practice, but in a production environment, it's advisable to use a more sophisticated logging library or tool. Console.log statements may be removed in a production environment, causing potential loss of debugging information.

#### 3. jQuery Dependency:

- The code uses jQuery `($('body').find('h1'))` to update the text content of an HTML element. Ensure that jQuery is included in your project if you plan to use it. If you're not using other jQuery features, consider using native JavaScript to manipulate the DOM.

#### 4. Array Iteration:

- The loop iterates three times, assuming the length of the array `x` is always 3. If there's a possibility that the array length could change, consider using `x.length` in the loop condition to make it more flexible.

```js
for (var i = 0; i < x.length; i++) {
```

#### 5. HTML Structure:

- Ensure that an `<h1>` element exists in the HTML document before attempting to update its text content. If there's a chance that the element might not be present, consider adding a check or creating it dynamically.

#### 6. Whitespace in Concatenation:

- There is an extra space being added before and after each array element when concatenating the strings. If you want a space between each word, you can adjust the concatenation to achieve this.

```js
myStr = myStr + ' ' + x[i]
```

Here's a slightly modified version incorporating these suggestions:

```js
function GetSentence() {
  const first_part = 'I like to eat'
  let myStr = first_part

  console.log('Starting function')

  for (let i = 0; i < 3; i++) {
    const x = ['apples', 'bananas', 'cookies']
    myStr = myStr + ' ' + x[i]
    // Check if the element exists before updating its text content
    const h1Element = $('body').find('h1')
    if (h1Element.length) {
      h1Element.text(myStr)
    }
    console.log(myStr)
  }

  console.log('Function completed')
}

GetSentence()
```

Note: This assumes that you have a valid use case for using jQuery and that the HTML structure is suitable for the provided code.

---

## 3. What is wrong with the function computeTotal()?

The issue with the `computeTotal` function is related to the arrow function used within the `each` method. In jQuery's `each` method, when using an arrow function, the `this` value does not represent the current DOM element inside the function. Instead, it retains the value of `this` from the outer scope.

To fix this issue, you should use a regular function expression instead of an arrow function in the `each` method. Here's the corrected code:

```js
function computeTotal() {
  let total = 0
  $('li').each(function () {
    total += parseInt($(this).text(), 10)
  })
  $('#total').text(`Total: ${total}`)
}

document.addEventListener('DOMContentLoaded', function () {
  computeTotal()
})
```

Now, the function () syntax inside the each method will correctly bind this to the current DOM element, allowing you to access its text content properly.

---

## 4. What is the order of the items in the displayed list? Explain.

Let's break down the execution flow and understand the order of items in the displayed list:

1. The HTML structure is loaded.
2. The browser then loads the `script.js` file, which contains the `showCars` function.
3. The `showCars` function is called when the DOM content is loaded `(DOMContentLoaded event)`.
4. Inside `showCars`, the initial items `ford` and `honda` are added to the list using the `showItem` function.
5. Then, a fetch request is made to 'germanCars.json'. However, this operation is asynchronous, and the subsequent code continues to execute without waiting for the fetch to complete.

Now, let's analyze the order of the items in the list based on the execution flow:

- `ford` is added first.
- `toyota` is added immediately after the fetch is initiated but before the fetch completes.
- `honda` is added before the fetch completes.

Finally, when the fetch operation is complete and the JSON data is available:

- The items from the 'germanCars.json' file ('vw', 'bmw', 'mercedes') are added to the list.

So, the final order of items displayed in the list will be:

1. `ford`
2. `toyota`
3. `honda`
4. `vw`
5. `bmw`
6. `mercedes`

It's important to note that the order of the items from 'germanCars.json' is determined by the order in which they appear in the array in the JSON file.

---

## 5. Describe a deadlock. What causes it? What are the effects?

A deadlock is a situation in concurrent programming where two or more threads or processes are unable to proceed because each is waiting for the other to release a resource. In other words, a set of processes or threads are blocked, and none of them can continue their execution because each is holding a resource and waiting for another resource acquired by some other process.

A deadlock typically occurs when four necessary conditions, known as the Coffman conditions, are met simultaneously. These conditions are:

1. **Mutual Exclusion**: At least one resource must be held in a non-sharable mode, meaning only one process can use the resource at a time.
2. **Hold and Wait**: A process is currently holding at least one resource and waiting to acquire additional resources held by other processes.
3. **Deadlock Detection and Recovery Overhead**: Systems may need to implement deadlock detection algorithms, which add overhead to the system. Recovery strategies, such as killing processes or rolling back transactions, may also be employed.
4. **User Frustration**: If a user is waiting for a resource held by a deadlocked process, the user may experience frustration due to the delay in getting the desired service.

Avoiding deadlocks involves careful design of algorithms and strategies such as deadlock prevention, deadlock avoidance, and deadlock detection with recovery. These techniques aim to eliminate one or more of the Coffman conditions, preventing deadlocks or resolving them when they occur.

---

## 6. Write a piece of code for the following problem and analyze its complexity: Given an array of distinct integers and a target sum, find two numbers in the array that add up to the target sum.

```jsx
function findTwoNumbers(nums, target) {
  const numMap = {}; // Hash table to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      // Found a pair that adds up to the target sum
      return [numMap[complement], i];
    }

    // Store the current number and its index in the hash table
    numMap[nums[i]] = i;
  }

  // No such pair found
  return null;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = findTwoNumbers(nums, target);
if (result) {
  const [index1, index2] = result;
  console.log(`Indices of the two numbers: ${index1}, ${index2}`);
} else {
  console.log("No such pair found.");

```

- Time Complexity: O(n)

  - The algorithm iterates through the array once, performing constant-time operations for each element.
  - The lookup and insertion operations in the hash table take constant time on average.

- Space Complexity: O(n)

  - The space complexity is determined by the size of the hash table, which can have at most n entries, where n is the number of elements in the array.

This solution is efficient with a linear time complexity, making it a good choice for large arrays.

---

## 7. You are on a team of 3 people, and one of your teammates continuously lags behind in the number of completed tasks. How would you handle this?

As I worked at Sun Asterisk Philippines, whenever I have time, we always discuss the time blocks that we have encountered during the task implementation. We schedule meetings to further discuss the problems and collaborate on possible solutions for the said issues."

Now, regarding the question about a team member lagging behind in completed tasks:

In a situation where one of my teammates consistently lags behind in completing tasks, I would take a proactive approach to address the issue. Firstly, I would schedule a one-on-one meeting with the team member to discuss their workload, challenges, and any issues they might be facing. It's crucial to approach this conversation with empathy and a willingness to understand their perspective.

During the discussion, I would seek to identify the root cause of the lagging performance. It could be due to personal challenges, lack of clarity on tasks, or other work-related issues. Once the underlying issues are identified, we can work together to come up with potential solutions.

In collaboration with the team member, I would explore ways to improve their workflow, provide additional support or training if necessary, and set realistic goals and deadlines. It's important to foster a positive and supportive environment, encouraging open communication to address any concerns or obstacles that may be hindering their productivity.

Additionally, I would keep the team informed about the situation, ensuring transparency while respecting the privacy and dignity of the team member. This way, the entire team can contribute to a supportive atmosphere, and if needed, they can provide assistance or guidance to help the struggling team member catch up.

Regular check-ins and feedback sessions would be essential to monitor progress and make any necessary adjustments to the plan. The key is to approach the situation with a solution-oriented mindset, fostering a collaborative team environment that values each member's contributions and growth.

---

## 8. Who is your role model in the world of technology? Why?

My role model in this modern world is Mark Zuckerberg, the visionary entrepreneur who founded Facebook. I'm particularly inspired by his ability to not only create a groundbreaking social media platform but also to continuously innovate and adapt in the ever-evolving tech landscape.

Mark Zuckerberg's journey from creating Facebook in his college dorm room to steering it into one of the most influential companies globally is truly remarkable. His commitment to connecting people and fostering communication has had a profound impact on the way we interact and share information.

What resonates with me is not just the success of Facebook, but also Zuckerberg's forward-thinking approach to technology. He's not afraid to take risks, embrace challenges, and explore new possibilities. His dedication to pushing the boundaries of what technology can achieve aligns with my aspiration to create something that will leave a lasting positive impact on the world.

Moreover, I admire Zuckerberg's emphasis on continuous learning and his focus on addressing global challenges through initiatives like the Chan Zuckerberg Initiative. His philanthropic efforts demonstrate a sense of responsibility and a desire to use technology as a force for good.

In summary, Mark Zuckerberg serves as my role model because of his entrepreneurial spirit, innovative mindset, and commitment to leveraging technology for positive change. I aim to draw inspiration from his journey as I pursue my own endeavors in the world of technology."

---

## 9. What is your current compensation structure and how do you see yourself in the next 5 years?

My current compensation structure is in the range of 23-25K a month based on my experience and role in my previous company. As for the next five years, while I cannot predict specific details about my compensation, I am committed to continuous professional growth and adapting to the dynamic landscape of technology.

In the coming years, I envision myself expanding my skill set and knowledge base to remain at the forefront of technological advancements. I am dedicated to being adaptable in the face of emerging technologies, and I see myself evolving into a more valuable individual within the tech industry.

My goal is to not only keep pace with changes in technology but also to proactively embrace and contribute to these changes. I plan to stay informed about industry trends, acquire new skills, and engage in professional development opportunities. By doing so, I aim to position myself as a versatile and sought-after professional who can bring innovative solutions to the challenges of the tech landscape.

While specific details about compensation may vary, I am confident that by consistently enhancing my skills and staying abreast of industry developments, I will contribute meaningfully to any organization I am part of. My vision for the next five years involves not just personal growth but also making substantial contributions to the success and innovation of the teams and projects I am involved in."

---

## 10. If we discover that we are a good match together - when would you be available to join our team?

I resigned from my previous position two months ago, adhering to the two-month notice period. My resignation was effective from August to October 31, as I had planned to take a two-month vacation to rest and recharge. If this application process is urgent and aligns well with my skills and experience, I could potentially join your team within this month of November. However, if the timing is more flexible, I would prefer to start in January.

My decision to take a brief break was driven by personal reasons. I recently lost my grandfather, who played a significant role in raising me. Additionally, this month brought another family tragedy with the passing of my uncle. Given these circumstances, my primary wish is to spend time with my grandmother, offering support during these challenging times.

I hope you understand the context, and I appreciate your consideration. If a January start date aligns with your hiring timeline, it would allow me the necessary time to address personal matters and approach the new role with the focus and dedication it deserves

---

Thank you so much!
