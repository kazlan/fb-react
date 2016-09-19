
import watchFacebookSagas from './facebook'

export function* rootSaga(){
    yield [
         console.log("Defining sagas..."),
         watchFacebookSagas
    ]
}
    