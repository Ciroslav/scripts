import http from 'axios';
import secretValues  from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const GetCampaignEndpoint = secretValues.GetCampaignEndpoint;
const DeleteCampaignEndpoint = secretValues.DeleteCampaignEndpoint;
const DeleteMailEndpoint = secretValues.DeleteMailEndpoint;


// delete certain amount of campaigns (starting from oldest)
// up to 143 supported
function listAndDelete(number) {

  const query = `?page=0&size=${number}&companyId=${CompanyId}&status=&orderBy=createdDate&direction=ASC&name=`;

  http({
    method: 'get',
    url: GetCampaignEndpoint+query,
    headers: {
      Authorization: Auth
    }
  })
    .then((response) => {
      for (let i = 0; i < response.data.data.content.length; i++) {
        let campaignId = response.data.data.content[i].id;
        http({
          method: 'delete',
          url: DeleteCampaignEndpoint+campaignId,
          headers: {
            Authorization: Auth
          }
        });
      }
    }, (error) => {
      console.log(error);
    })
    .then(()=> console.log(`${number} Campaigns successfully deleted`))
  
    
}


listAndDelete();




