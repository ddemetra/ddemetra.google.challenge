/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, firstItem, link;

navList = $('.nav-list');

firstItem = navList.children().first();

link = firstItem.find('a');
link.attr('href','#1');

