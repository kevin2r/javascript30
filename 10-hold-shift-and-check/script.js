const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
})

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  //check multiple checkboxes
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  };

  //uncheck multiple checkboxes
  if (e.shiftKey && !this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  };

lastChecked = this;
}
