First i set up a React app with create-react-app.
In which i also setup react-redux @redux/toolkit and createAsyncThunk
For fetching users Data we used CreateAsyncThunk and for passing .
For updating that data i used reducers.
Meanwhile i created components Header , Card and spinner .
For passing UsersData we create a store .
Header contains Navigation menu. in which if we press button Get Users the getUsers action dispatches . Which go to the Thunk action creator . where we fetch the Data form Api .
After Fetching that Data previous state is updated and new state is passed to the Card Component with the help of useSelector . also there is a loading statein our app . which is set to be false initially. but when the fetching api start it is set to true . after the promise is fulfilled the loading is set to be false.
On the basis of this loading our Spinner component is rendering in conditionally rendering.
for styling i use scss as well as css .

The whole project is completed in 6 Hours . Most of the time is taken by styling of the project.

              Thank You  !
