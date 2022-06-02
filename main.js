const { google } = require("googleapis");
const keys = require("./key.json");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

client.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Connected!");
    gsrun(client);
  }
});

async function gsrun(cl) {
  // Get data in gsheet
  //---------------------
  // const gsapi = google.sheets({ version: "v4", auth: cl });
  // const opt = {
  //   spreadsheetId: "13jOu9WYg8FjCiyIW9u7YCRaQv9d7Cd95T1CRXUbtIoQ",
  //   range: "A1:F1",
  // };
  // let content = await gsapi.spreadsheets.values.get(opt);
  // console.log(content.data.values);

  const gsapi = google.sheets({ version: "v4", auth: cl });
  // copy cell to cell gsheet
  // ------------------------
  // const opt = {
  //   spreadsheetId: "13jOu9WYg8FjCiyIW9u7YCRaQv9d7Cd95T1CRXUbtIoQ",
  //   range: "A1:F1",
  // };
  // let content = await gsapi.spreadsheets.values.get(opt);
  // let dataArray = content.data.values;
  // let newDataArray = dataArray.map(function (r) {
  //   r.push(r[0] + "-" + r[1]);
  //   return r;
  // });

  let newDataArray = [
    [
      "ihsan",
      "Minuman",
      "081269085794",
      "ihsan@gmail.com",
      "medan",
      "jl dipo",
      "23 Mei 2021",
    ],
  ];

  const updateSheet = {
    spreadsheetId: "13jOu9WYg8FjCiyIW9u7YCRaQv9d7Cd95T1CRXUbtIoQ",

    range: "A3",
    valueInputOption: "USER_ENTERED",
    resource: { values: newDataArray },
  };
  let res = await gsapi.spreadsheets.values.update(updateSheet);

  console.log(newDataArray);
}
