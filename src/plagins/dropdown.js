$(document).ready(function() {
  $('.guests').iqDropdown({
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'гость',
    selectionText1: 'гостя',
    selectionText2: 'гостей',
    selectionText3: 'младенец',
    selectionText4: 'младенца',
    selectionText5: 'младенцев',
    textPlural: 'Сколько гостей',
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
      if ((id == "item1") && (itemCount.item2 > 0 || itemCount.item3 > 0) && (itemCount.item1 == 1)) {
        return false;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if ((id === "item2" || id === "item3") && itemCount.item1 == 0) {
        return false;
      }
      return true;
    }
  });
  $('.rooms').iqDropdown({
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'спальня',
    selectionText1: 'спальни',
    selectionText2: 'спален',
    selectionText3: 'кровать...',
    selectionText4: 'кровати...',
    selectionText5: 'кроватей...',
    textPlural: 'Сколько спален',
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
      if ((id == "item1") && (itemCount.item2 > 0 || itemCount.item3 > 0) && (itemCount.item1 == 1)) {
        return false;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if ((id === "item2" || id === "item3") && itemCount.item1 == 0) {
        return false;
      }
      return true;
    }
  });
});
