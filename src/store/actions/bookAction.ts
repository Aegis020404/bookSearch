import axios from "../../axios";
import {AppDispatch} from "../index";
import {IBook, ServerResponse} from "../../models/models";
import {BookSlice} from "../slices/bookSlice";
let quest = 'js'
export const fetchBooks = (page  = 0 ,question= '',order= 'relevance',categories='') => {
    return async (dispatch: AppDispatch) => {
        try {
            if(!question) { question = quest } else { quest = question }
            if(question !== quest) { categories=''; order= 'relevance'}
            dispatch(BookSlice.actions.fetching())
            let url:string = `volumes?key=AIzaSyDWeQ-iadn6kZ-Du-FsPoeLS3tl-BT7gG0&maxResults=30`//&q=${question}//&orderBy=${order}
           const response = await axios.get<ServerResponse<IBook>>(url,{
               params: {
                   "orderBy" : order,
                   "startIndex":page,
                   "q": `${question} ${categories}`  ,

               }
           }).then((e)=> {
                return e
           })
            dispatch(BookSlice.actions.fetchSuccess(
                {...response.data, question, page,categories,order},

            ))
        } catch (e) {
        dispatch(BookSlice.actions.fetchError(e as Error))
            console.log('Error request')
            console.log(e)
        }
    }
}