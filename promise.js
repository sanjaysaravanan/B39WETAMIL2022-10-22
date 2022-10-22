// initiaze a promise
// () => {} empty callback

// const samplePromise = new Promise(() => { });

// console.log(samplePromise);



// resolve
// var flag = false;
// const sleepPromise = new Promise((resolve, reject) => {
//   if (flag)
//     setTimeout(() => {
//       resolve('Slept for 8hrs');
//     }, 8000);
//   else
//     setTimeout(() => {
//       reject('I was not able sleep 8hrs because of Home Work');
//     }, 8000);
// });

// console.log(sleepPromise);

// setTimeout(() => {
//   console.log(sleepPromise);
// }, 9000);



// const loginFunc = (user, password, resolveLogin, rejectLogin) => {
//   if (user === 'sanjay' && password === 'saravanan') {
//     setTimeout(() => {
//       resolveLogin({ user: 'Sanjay', email: 'sanjay@gmail.com', isLoggedIn: true });
//     }, 5000)
//   } else {
//     setTimeout(() => {
//       rejectLogin({ user: 'sanjay', isLoggedIn: false });
//     }, 5000)
//   }
// };


// const loginPromise = new Promise((resolve, reject) => {
//   loginFunc('sanjay', 'saravanan', resolve, reject);
// });

// console.log(loginPromise);

// setTimeout(() => {
//   console.log(loginPromise);
// }, 2000);

// getting the 
// loginPromise
//   .then(  // executes when the promise is reolved/fullfilled
//     (response) => {
//       console.log(response);
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({ ...response, userDetaisl: { name: 'Sanjay', age: '49', role: 'DEV' } });
//         }, 5000);
//       });
//     }
//   )
//   .then((response) => {
//     console.log(response);
//     return new Promise((resolve, reject) => {
//       const flag = true;
//       setTimeout(() => {
//         if (flag) {
//           resolve({ ...response, userDetaisl: { name: 'Sanjay', age: '49', role: 'DEV' }, hobbies: ['Webseries', "music"] });
//         }
//         else {
//           reject('Rejecting from promise 3');
//         }
//       }, 5000);
//     });
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch( // executed when the promise is rejected/unfullfilled
//     (error) => {
//       console.log(error);
//     }
//   );

// console.log(loginPromise);



const obj = {
  name: "B39WETAMIL",
  userDetails: {
    batch: 'B39WETAMIL',
    mentor: 'Sanjay',
    candidates: 20,
  },
  techStacks: ['JS', 'HTML', 'CSS']
};

// Name
// userDetails
// techstacks

// parallel
const namePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('resolved Name Promise');
    resolve(obj.name);
  }, 2000);
});

const detailsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('resolved Details Promise');
    reject({ message: 'error in getting the details' });
    // resolve(obj.userDetails);
  }, 3000);
});

const techStackPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('resolved Tech Stack Promise');
    resolve(obj.techStacks);
  }, 5000);
});

Promise.all([namePromise, detailsPromise, techStackPromise])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
