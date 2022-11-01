import http from 'axios';
import secretValues from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const PostPrizeEndpoint = secretValues.PostPrizeEndpoint;
const DeletePrizeEndpoint = secretValues.DeletePrizeEndpoint;


var prizesId = [];

async function list(number) {
let chunkSize = 40;
  for (let i = 0; i * chunkSize < number; i++) {
  let Data = { "companyId": CompanyId, "perPage": chunkSize, "pageNumber": i, "sortBy": "createdAt", "order": "DESC", "searchTerm": "" };
    await http({
      method: 'post',
      url: PostPrizeEndpoint,
      data: Data,
      headers: {
        Authorization: Auth
      }
    })
      .then((response) => {
        response.data.data.map(el => {
          prizesId.push(el.id);
      
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
}


function deleteRequest(prizeId) {
  return http({
    method: 'delete',
    url: `${DeletePrizeEndpoint}${prizeId}`,
    headers: {
      Authorization: Auth
    }
  });
}

 function deleteAll(number) {
 list(number).then(()=>
  {
    const batchSize = 40;
    var numberOfBatches =  Math.ceil(prizesId.length/batchSize);
    console.log(numberOfBatches);
  
    
  async function deleteBatch() {  
    for (let n =0; n<numberOfBatches;n++){

    let Batch = prizesId.slice(n*batchSize,(n+1)*batchSize);
  
    await Promise.all(Batch.map(el => deleteRequest(el)))

    console.log('Batch number ',n+1,' deleted');

    }
  }
   deleteBatch();
}
)
}

deleteAll(400);




// async function deleteAll(number) {
//   const batchSize = 50;
//   try {
//    list(number);
//     await list(number)
//      var numberOfBatches = await list(number);
//      Math.ceil(await list(number).length/batchSize)
//   }
//   catch (err) {
//     console.error(err);
//   }
  
  
//    for (let n =0; (n+1)<numberOfBatches; n++)
//   {
//   let Batch = prizesId.slice(n*batchSize,(n+1)*batchSize);
//   console.log(Batch)
  
//     for (let i =0;i<Batch.length;i++) {
//        deleteRequest(Batch[i])
//     }
//   }
  
// }
// list(120)
// async function bla() {
//   try {
//     await list(120)
//     console.log(prizesId)
//   }
//  catch (err){
// console.error(err)
//  }
// }
// bla();



      // const batch = 80
      // const n = 0
      // let x = Promise.all(requests.slice(batch * n, batch * (n + 1)))


      //   x = x.then(_ => {
      //     n++;
      //     list = requests.slice(batch * n, batch * (n + 1))
      //     return Promise.all(list)
      //   })






      // for (let i = 0; i < response.data.data.length; i++) {
      //   let prizeId = response.data.data[i].id;
        
      // }
