

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans
1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
	•	getElementById("id")
	•	Finds only one element with a given id.
	•	Returns a single element object (not a list).
	•	Fastest method.
•	getElementsByClassName("className")
	•	Finds all elements with that class.
	•	Returns an HTMLCollection (like an array, but live — updates if DOM changes).
	•	querySelector("CSS selector")
	•	Finds the first element that matches a CSS selector.
	•	Flexible: you can use IDs, classes, attributes, etc.
getElementById → single element by ID
	•	getElementsByClassName → all elements by class (HTMLCollection)
	•	querySelector → first match (powerful, CSS-style)
	•	querySelectorAll → all matches (NodeList)
2. How do you **create and insert a new element into the DOM**?
2. How to create and insert a new element into the DOM

Steps:
	1.	Create element → document.createElement("tag")
	2.	Add content/attributes → .textContent, .innerHTML, .setAttribute()
	3.	Insert → .appendChild(), .append(), .prepend(), .insertBefore()
3. What is **Event Bubbling** and how does it work?
⸻

3. What is Event Bubbling?
	•	Event bubbling = when an event happens on an element, it first runs on the target, then goes up (bubbles) to parent elements, all the way to document.
4. What is **Event Delegation** in JavaScript? Why is it useful?
⸻

4. What is Event Delegation? Why is it useful?
	•	Event Delegation = instead of adding an event listener to each child, you add one listener to the parent and let event bubbling handle it.
	•	Useful when:
	•	Many child elements (performance).
	•	Elements are dynamically added.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
5. Difference between preventDefault() and stopPropagation()
	•	preventDefault()
	•	Stops the default action of an element.
	•	Example: Prevent link from navigating, form from submitting.
  

