'use strict';

class AssistService {

  constructor($http, ENDPOINTS) {
    $http.defaults.useXDomain = true; // cors

    this.$http = $http;
    this.appUrl = 'http://localhost:8080';
    this.servicesTypesUrl = ENDPOINTS.base + ENDPOINTS.serviceTypes;
    this.assistanceRequestsUrl = ENDPOINTS.base + ENDPOINTS.assistanceRequests;
  }

  getTypes () {
    // returns a promise
    return this.$http({
      method: 'GET',
      url: this.servicesTypesUrl
    });
  }

  sendAssistRequest (data) {
    this.$http({
      method: 'POST',
      url: this.assistanceRequestsUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     },
     data: data
   });
  }

};

AssistService.$inject = ['$http', 'ENDPOINTS'];
export default AssistService;
