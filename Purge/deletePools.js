import http from 'axios';
import secretValues from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const PostPoolEndpoint = secretValues.PostPoolEndpoint;
const DeletePoolEndpoint = secretValues.DeletePoolEndpoint;



function listAndDelete() {

  const Data = { "companyId": CompanyId, "perPage": 1000, "pageNumber": 0, "sortBy": "createdAt", "order": "DESC", "searchTerm": "" };

  http({
    method: 'post',
    url: PostPoolEndpoint,
    data: Data,
    headers: {
      Authorization: Auth
    }
  })
    .then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        let PoolId = response.data.data[i].id;
        http({
          method: 'delete',
          url: `${DeletePoolEndpoint}${PoolId}`,
          headers: {
            Authorization: Auth
          }
        });
      }
    }, (error) => {
      console.log(error);
    })
    .then(() => console.log('All pools successfully deleted'));
}


listAndDelete();

console.log(CompanyId);


