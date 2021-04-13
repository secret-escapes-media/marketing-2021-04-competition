var formFunctions = function functionName(form) {
  //////////////////////////////////////////////////////////// private functions

  // add specifc status messages for this form
  function formAddStatusMessages() {
    var formMessagesClass = "js-form-messages";
    var formMessagesElement = $(form.element).find("." + formMessagesClass);
    // loop through all messages and make html element
    for (var i = 0; i < form.statusMessages.length; i++) {
      // create elements
      var container = document.createElement("div");
      var wrap = document.createElement("div");
      var title = document.createElement("h3");
      var description = document.createElement("p");
      // add classes
      container.className = "message message--" + form.statusMessages[i].id;
      wrap.className = "width width--md";
      title.className = "h h--sm";
      description.className = "p--lg p--normal";
      // add content
      title.textContent = form.statusMessages[i].title;
      description.textContent = form.statusMessages[i].description;
      // create structure
      container.appendChild(wrap);
      wrap.appendChild(title);
      wrap.appendChild(description);
      // add to page
      formMessagesElement.append(container);
    }
  }

  // apply a class for selected radio or checkbox input
  function formSelectedInputClass() {
    var inputButtonClass = "js-input-button";
    $(form.element)
      .find("." + inputButtonClass)
      .on("change", function () {
        var $input = $(this).find("input").not('input[type="hidden"]');
        var inputType = $input.attr("type");
        var selectedLabel = $input.closest("." + inputButtonClass);
        var selectedClass = "is-selected";
        if (inputType === "checkbox") {
          // checkbox function
          // get the hidden input for this group of checkbox values
          var valuesEl = $(
            "input[type='hidden']#" + this.parentElement.dataset.questionId
          )[0];
          // make an array to toggle and combine values
          var valuesArr = [];
          if (valuesEl.value !== "") valuesArr = valuesEl.value.split(",");
          // check if value is seclected or not
          if ($input[0].checked) {
            // add value to array
            valuesArr.push($input[0].value);
          } else {
            // find value's current position and remove from array
            for (var i = 0; i < valuesArr.length; i++) {
              if (valuesArr[i] === $input[0].value) {
                valuesArr.splice(i, 1);
                break;
              }
            }
          }
          // add combined values to element as string
          valuesEl.value = valuesArr.toString();
          // switch selected class
          if (selectedLabel.hasClass(selectedClass)) {
            selectedLabel.removeClass(selectedClass);
          } else {
            selectedLabel.addClass(selectedClass);
          }
        } else if (inputType === "radio") {
          // radio function
          var radioGroup = $input.closest("." + form.inputClass);
          // check if it is already selected
          if (!selectedLabel.hasClass(selectedClass)) {
            radioGroup
              .find("." + inputButtonClass + "." + selectedClass)
              .removeClass(selectedClass);
            selectedLabel.addClass(selectedClass);
          }
        }
      });
  }

  ///////////////////////////////////////////////////////////// public functions

  function submissionInProgress() {
    form.element
      .find("button")
      .prop("disabled", true)
      .addClass("is-loading")
      .html('Sending <div class="loading-icon"></div>');
  }

  function formInit() {
    // setting up the form
    form.element.trigger("reset"); // reset form values
    $(form.element).find('input[type="hidden"]').attr("value", ""); // reset all hidden input values
    $(form.element).find('button[type="submit"]').prop("disabled", false); // enable submit button - disabled for no js
    formAddStatusMessages(); // add all form status messages
    formSelectedInputClass(); // add function to detect selected radio or checkbox
    formValidation(form).invalidAnswer(); // there is an invalid answer in the form, add the message if selected
  }

  // show status message on form
  function formShowMessage(messageID) {
    form.element.addClass("form-message-is-visible"); // set class on entire form for css
    form.element.find("input, button, select, textarea").prop("disabled", true); // disable all of the form so people cant enter or tab through it
    form.element.find("a").removeAttr("href"); // remove all links so user cant keyboard nav through them either
    form.element.find(".message--" + messageID).addClass("is-visible"); // show specific form message
  }

  ////////////////////////////////////////////////////// export public functions

  return {
    init: formInit,
    showMessage: formShowMessage,
    submissionInProgress: submissionInProgress
  };
};
