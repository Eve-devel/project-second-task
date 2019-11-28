$(document).ready(function() {
  $('.iqdropdown').iqDropdown({

  maxItems: 5,
  minItems: 1,
  selectionText: 'item',
  textPlural: 'items',
  controls: {
    position: 'right',
    displayCls: 'iqdropdown-item-display',
    controlsCls: 'iqdropdown-item-controls',
    counterCls: 'counter'
  },
  onChange: function(id, count, totalItems) {
  console.log(id, count, totalItems);
  },
  beforeDecrement: function(id, itemCount) {
    if (id === "item1") {
      return itemCount.adult > itemCount.infant;
    }
    return true;
  },
  beforeIncrement: function(id, itemCount) {
    if (id === "item2") {
      return itemCount.adult > itemCount.infant;
    }
    return true;
  }

});
});
