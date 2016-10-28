import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = () => 
(
	<p>
		Show:
		{" "}
		<FilterLink filter="SHOW_ALL">
			SHOW ALL
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">
			SHOW ACTIVE
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_COMPLETED">
			SHOW COPLETED
		</FilterLink>
	</p>
)
 

export default Footer;