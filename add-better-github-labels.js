[
  {
    "name": "Type: Help Needed",
    "color": "5319e7"
  },
  {
    "name": "Priority: Critical",
    "color": "ff2222"
  },
  {
    "name": "Priority: High",
    "color": "FF7922"
  },
  {
    "name": "Priority: Low",
    "color": "c2e0c6"
  },
  {
    "name": "Priority: Medium",
    "color": "fbca04"
  },
  {
    "name": "Status: Complete",
    "color": "7ED321"
  },
  {
    "name": "Status: Confirmed",
    "color": "0e8a16"
  },
  {
    "name": "Status: Feedback Needed",
    "color": "006b75"
  },
  {
    "name": "Status: In Progress",
    "color": "FC8264"
  },
  {
    "name": "Status: On Hold",
    "color": "BABABA"
  },
  {
    "name": "Status: Review Needed",
    "color": "EAE435"
  },
  {
    "name": "Type: Bug",
    "color": "ff2222"
  },
  {
    "name": "Type: Enhancement",
    "color": "1d76db"
  },
  {
    "name": "Type: Feature",
    "color": "6DFF6D"
  },
  {
    "name": "Type: Idea",
    "color": "6DE6FF"
  },
  {
    "name": "Type: Question",
    "color": "FF6DD9"
  }
].forEach(function(label) {
  addLabel(label)
})

function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.js-new-label-name-input').value = label.name
      element.querySelector('.js-new-label-color-input').value = '#' + label.color
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.js-new-label-name-input').value = label.name
  document.querySelector('.js-new-label-color-input').value = '#' + label.color
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false
  document.querySelector('.js-details-target ~ .btn-primary').click()
}

function addLabel (label) {
  if (!updateLabel(label)) addNewLabel(label)
}
