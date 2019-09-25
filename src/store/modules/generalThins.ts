import { getChildData } from '../../services/example';


export default {
    namespaced : true,
    state: {
        listType: [],
    },
    mutations: {
        getListType(state: any,payload:any) {
            console.log(payload)
            state.listType = payload;
        }
    },
    actions: {
        async msGetList({ commit }: any, id: any) {
            let result = await getChildData({id});
            console.log(result)
            commit('getListType',result.data.data)
        }
    }
}