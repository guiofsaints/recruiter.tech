import React from 'react';

const Loading = ({showLoading}): JSX.Element => {
	return showLoading ? <div>Carregando...</div> : null;
}

export default Loading;