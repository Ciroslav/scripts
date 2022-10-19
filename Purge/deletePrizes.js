import http from 'axios';
import secretValues from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const PostEndpoint = secretValues.PostEndpoint;
const DeleteEndpoint = secretValues.DeleteEndpoint;



function listAndDelete() {

  const Data = { "companyId": CompanyId, "perPage": 1000, "pageNumber": 0, "sortBy": "createdAt", "order": "DESC", "searchTerm": "" };

  http({
    method: 'post',
    url: PostEndpoint,
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
          url: `${DeleteEndpoint}${prizeId}`,
          headers: {
            Authorization: Auth
          }
        });
      }
    }, (error) => {
      console.log(error);
    });
}


listAndDelete();


