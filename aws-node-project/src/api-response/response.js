const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,GET"
  };

  export const succesResponse = (data) => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(
        data
    )
  });



 