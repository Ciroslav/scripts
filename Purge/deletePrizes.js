import http from 'axios';
import secretValues  from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const PostPrizeEndpoint = secretValues.PostPrizeEndpoint;
const DeletePrizeEndpoint = secretValues.DeletePrizeEndpoint;



function listAndDelete() {

  const Data = { "companyId": CompanyId, "perPage": 1000, "pageNumber": 0, "sortBy": "createdAt", "order": "DESC", "searchTerm": "" };

  http({
    method: 'post',
    url: PostPrizeEndpoint,
    data: Data,
    headers: {
      Authorization: Auth
    }
  })
    .then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        let prizeId = response.data.data[i].id;
        http({
          method: 'delete',
          url: `${DeletePrizeEndpoint}${prizeId}`,
          headers: {
            Authorization: Auth
          }
        });
      }
    }, (error) => {
      console.log(error);
    })
    .then(()=> console.log('All prizes successfully deleted'));
}


listAndDelete();

console.log(CompanyId);


