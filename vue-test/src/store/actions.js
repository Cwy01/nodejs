var status = false;
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

