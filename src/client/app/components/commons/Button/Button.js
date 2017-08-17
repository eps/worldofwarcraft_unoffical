import React from 'react';
import cx from 'classnames';
import styles from './Button.scss';


class Button extends React.Component {

  render () {
    const props = this.props;

    return (
       <button className={cx(styles, {
         [styles.default]: true,
         [styles.fluid]: props.fluid,
         [styles.danger]: props.danger,
       })}
        onClick={props.handleClick}
        type={props.type || 'button'}
        >
        {props.children}
      </button>
    );
  }
}

export default Button;
