import http  from 'axios';

let DeleteEndpoint = 'https://test-serverless-api.brame-gamification.com/prize-management/prizes/delete/';
let prizeId = 2511;
const Auth = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBSjVBVGlObUlWRDRsSURWZVdMc0JpR1Z4VnFqSGtnR2ZyYmtOdnlZUlhjIn0.eyJleHAiOjE2NjM2ODAwNzEsImlhdCI6MTY2MzY2NTY3MSwianRpIjoiNmY1ZGNkMzMtM2IwNi00NWI3LWE0YWQtMWIyMjZmNGFlNDVjIiwiaXNzIjoiaHR0cHM6Ly90ZXN0LWFwaS5icmFtZS1nYW1pZmljYXRpb24uY29tL2tleWNsb2FrL2F1dGgvcmVhbG1zL2JyYW1lIiwiYXVkIjoiYmUtc2VydmljZSIsInN1YiI6IjUxYTUwZDA1LTY0NDYtNDRkNi05ZjgxLTQ2ODZkMjgzOTUzOCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImZlLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiJkMjNhYTNmOS0xNjQ2LTQ1Y2YtYmNiMi1lYWNjYTJkZGI1MDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vdGVzdC1hcHAuYnJhbWUtZ2FtaWZpY2F0aW9uLmNvbSIsInRlc3QtYXBwLmJyYW1lLWdhbWlmaWNhdGlvbi5jb20iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkVESVRPUiIsIlVTRVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJiZS1zZXJ2aWNlIjp7InJvbGVzIjpbIkVESVRPUiIsIlVTRVJfQURNSU4iXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInJvbGUiOlsiRURJVE9SIiwiVVNFUl9BRE1JTiJdLCJjb21wYW55X2lkIjoiN2NjZWI5YjYtZTI0Yi0xMWVjLWJiOWItY2QwMTliN2JmY2Y0IiwibmFtZSI6Ik5lbWFuamEgQ2lya292aWMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJuZW1hbmphLmNpcmtvdmljQGJyYW1lLmNoIiwiZ2l2ZW5fbmFtZSI6Ik5lbWFuamEiLCJmYW1pbHlfbmFtZSI6IkNpcmtvdmljIiwiZW1haWwiOiJuZW1hbmphLmNpcmtvdmljQGJyYW1lLmNoIn0.NUAdi8Xvvzy4q9X7Y8pq160UBuRSTHTH0E21L1ujpGgQlYJIheb7QBEhjru5eEQogPmZrW_QRKIBuoftrbwDFFOTTAIh-UtfBE2ITL4ZLfl46PE5s_ks_xN_aP1WHuEIuM80LuURyk_zF1HAEloSxh2HwcJysQGJil7RcmAwRSSxexS01ijkEKgSFyJD8Pg0ikjbuCHSUEgexlFWv4ITe0ZMW7VC5hPun1GpXfOW9FuZzWfzLPCB_1NzbJ95ptbQzd8sk3ZBkgDP_3PG0i79WQ1LQnMQ8FWVz5NwsMKwuLWS5DKRLah6_BiOgOJO0k8Y-bLRy5upJ5vBJPG5gNwreA';
http({
    method: 'delete', 
    url: `${DeleteEndpoint}${prizeId}`,
    headers: {
      Authorization: Auth
    }
  });