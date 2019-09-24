import { getList } from '../../services/example'

export default {
    namespaced:true,
    state: {
        indexList: [],
    },
    mutations: {
        getList(state: any,payload:any) {
            console.log(payload)
            state.indexList = payload;
            console.log(state.indexList);
        }
    },
    actions: {
        async msGetList({ commit }: any) {
            let result = await getList()
            console.log(result)
            commit('getList',result.data.data)
        }
    }
}