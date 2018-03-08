$(function() {
    
var $listItems = $('li');
var $firstListItem = $('li:first');
var $activeElement = $('li.active')
var middle = Math.ceil($listItems.length/2);
var middleElement = $listItems[middle];
var $obj = $(middleElement);
console.log(middleElement);
console.log($obj);



console.log($listItems);
$firstListItem.addClass('bottomborder')
$listItems.addClass('touppercase');
$activeElement.addClass('fontsize');
$obj.addClass('background');


});