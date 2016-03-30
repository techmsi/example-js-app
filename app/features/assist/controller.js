'use strict';

class AssistFormController {

  constructor(AssistService) {
    this.AssistService = AssistService;
    this.initOptions();
  }

  // Prepopulate form with sample data
  loadSample(){
    this.user = {
      "contact": {
        "first_name": "Ulysses",
        "last_name": "Grant",
        "email": "ulysses@union.mil"
      },
      "service_type": this.types[0],
      "description": "The friend in my adversity I shall always cherish most. I can better trust those who have helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity."
    }
    this.terms = true;
  }

  // Clear form after submission
  reset() {
    this.user = {}
    this.terms = false;
  }

  initOptions() {
    this.AssistService.getTypes().then(types => {
      this.types = types.data.data;
    });
  }

  submit() {
    var data = {
      assistance_request: this.user
    }
    console.log('Submitted', data);
    this.reset();
    this.AssistService.sendAssistRequest(data);
  }

};

AssistFormController.$inject = ['AssistService'];
export default AssistFormController;
