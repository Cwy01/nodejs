var status = false;
//可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 访问 state 和 getters
export const iconStatus = ({commit}) => {
	if(status){
		commit({
			type: 'iconStatusFun',     //对应mutation.iconStatusFun
			iconStatusMsg: false
		});
		status = false;		
	}else{
		commit({
			type: 'iconStatusFun',
			iconStatusMsg: true
		}); 
		status = true;	
	}
  
};

