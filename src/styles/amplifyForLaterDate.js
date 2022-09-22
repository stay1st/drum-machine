//import Amplify from '@aws-amplify/core';
//import {  API, graphqlOperation, Storage } from 'aws-amplify';


// AWS.config.region = 'us-east-2'; // Region
    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    // IdentityPoolId: 'us-east-2:097bccd2-d6df-42c3-a68d-156611e87bef', us-east-1:fc22946c-bfb9-48ca-9570-83aaeebfe321
    // });
  // const ref = useRef(null);

  // useEffect(() => {

  //   Amplify.configure({
  //     Auth: {
  //       identityPoolId: "us-east-1:fc22946c-bfb9-48ca-9570-83aaeebfe321",
  //       region: 'us-east-1',
  //     },

  //     Storage: {
  //       AWSS3: {
  //         identityPoolId: "us-east-1:fc22946c-bfb9-48ca-9570-83aaeebfe321",
  //         bucket: 'drum-machine-samples',
  //         region: 'us-east-1'
  //       },
  //     },
  //   });
  // }, []);

  // const handleFileLoad = () => {
  //   const filename = ref.current.files[0].name;
  //   Storage.put(filename, ref.current.files[0]).then(Response => {
  //     console.log('Response:', Response);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  //   const [samples, setSamples] = useState([]);
// const [samplePlay, setSamplePlay] = useState('');

//   useEffect(() => {
//     fetchSamples();
//   }, []);

//   const toggleSample = async index => {
//     if(samplePlay === index) {
//       setSamplePlay('');
//       return
//     }
//     setSamplePlay(index);
//     return
//   }

//   const fetchSamples = async () => {
//     try {
//       const sampleData = await API.graphql(graphqlOperation(listSamples));
//       const sampleList = sampleData.data.listSamples.items;
//       console.log('sample list:', sampleList);
//       setSamples(sampleList);
//     } catch (err) {
//       console.log(err);
//     }
//   }