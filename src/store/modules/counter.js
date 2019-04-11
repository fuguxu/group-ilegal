const namespaced = true;

const state = {
    fileListSelect: false
  };
  
  const mutations = {
    FILE_LIST_SELECT (state, value) {
      // console.log('FILE_LIST_SELECT', value);
      state.fileListSelect = value;
    }
  };
  
  const actions = {
    FILE_LIST_SELECT ({ commit }, value) {
      // do something async
      // console.log('value',value);
      commit('FILE_LIST_SELECT', value);
      return '9999';
    }
  };
  
  const getters = {
    FILE_LIST_SELECT (state) {
      return state.fileListSelect + ' from getter';
    }
  };


export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
};