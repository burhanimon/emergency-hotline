
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Aswer

1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
	•	getElementById → finds only one element by its unique ID.
	•	getElementsByClassName → finds all elements with a given class and gives back a live collection.
	•	querySelector → finds the first element that matches a CSS selector.
	•	querySelectorAll → finds all elements that match a CSS selector and gives back a static list.

⸻

2. How to create and insert a new element into the DOM
	•	First, create a new element.
	•	Then, set its text or attributes.
	•	Finally, insert it into the document (like appending inside the body or another parent).

⸻

3. What is Event Bubbling?
	•	When an event happens on an element, it is handled by that element first.
	•	Then the event automatically “bubbles up” to its parent, then the parent’s parent, and so on, until it reaches the document root.

⸻

4. What is Event Delegation? Why is it useful?
	•	Event delegation means attaching an event listener to a parent element instead of each child element.
	•	Because of bubbling, the parent can detect actions from its children.
	•	This is useful for efficiency (fewer event listeners) and for handling elements that may be created dynamically later.

⸻

5. Difference between preventDefault() and stopPropagation()
	•	preventDefault() → stops the browser’s default action (like stopping a link from opening or a form from submitting).
	•	stopPropagation() → stops the event from continuing to bubble up to parent elements.