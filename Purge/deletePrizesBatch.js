import http from 'axios';
import secretValues from './secret.js'

const Auth = secretValues.Auth;
const CompanyId = secretValues.CompanyId;
const PostPrizeEndpoint = secretValues.PostPrizeEndpoint;
const DeletePrizeEndpoint = secretValues.DeletePrizeEndpoint;


function postRequest(pagination = 0, chunkSize = 40) {

  let Data = { "companyId": CompanyId, "perPage": chunkSize, "pageNumber": pagination, "sortBy": "createdAt", "order": "DESC", "searchTerm": "" }

  return http({
    method: 'post',
    url: PostPrizeEndpoint,
    data: Data,
    headers: {
      Authorization: Auth
    }
  })
};

function deleteRequest(prizeId) {

  return http({
    method: 'delete',
    url: `${DeletePrizeEndpoint}${prizeId}`,
    headers: {
      Authorization: Auth
    }
  })
};

async function deleteBatch(numberOfBatches, prizesId, batchSize) {
  for (let n = 0; n < numberOfBatches; n++) {
    let Batch = prizesId.slice(n * batchSize, (n + 1) * batchSize);
    let testArr = []
    await Promise.all(Batch.map(el => { deleteRequest(el); testArr.push(el); console.log(testArr.length, "ID", el) }));
    console.log('Batch number ', n + 1, ' deleted!');

  }
}

async function list(number, chunkSize = 40) {
  let numberOfChunks = Math.ceil(number / chunkSize);
  console.log("AAAAAAAAAAAAAAAAAAAAAANumber of chunks ", numberOfChunks)
  const arr = [...Array(numberOfChunks).keys()];
  console.log("BBBBBBBBBBBBBBBB chunks to send from array", numberOfChunks)
  let prizesId = [];


  const responses = await Promise.all(arr.map(el => postRequest(el)));
  const parsedResponse = (responses.map((el => el.data.data))).flat();
  parsedResponse.map(el => prizesId.push(el.id));
  console.log("BBBBBBBBBBBBBBB Number of prizes from responses", prizesId.length)
  console.log("without duplicates", [... new Set(prizesId)].length);
  return prizesId;
}


async function main(number) {
  try {
    const batchSize = 40;
    const prizesId = await list(number)
    const numberOfBatches = Math.ceil(prizesId.length / batchSize);
    console.log(`Number of batches: ${numberOfBatches}\nBatch size: ${batchSize}`);


    deleteBatch(numberOfBatches, prizesId, batchSize);
  }
  catch (err) {
    console.log(err);
  }



}
list(1000)



