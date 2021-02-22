import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wrapper from './Wrapper';
import Modal from './Modal';

const DynamicComponentCard = ({
  children,
  componentUid,
  friendlyName,
  icon,
  onClick,
}) => {
    const [modal, setModal] = useState('');
    const handleHover = (name) => {
        if(name) return setModal(`/components/${name}.png`);
    }
  return (
    <Wrapper
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();

        onClick(componentUid);
      }}
      onMouseEnter={()=>handleHover(friendlyName)}
      onMouseLeave={()=>setModal('')}
    >
      <button className="component-icon" type="button">
        <FontAwesomeIcon icon={icon} />
      </button>

      <div className="component-uid">
        <span>{friendlyName}</span>
      </div>
      {children}
      {modal &&
        <Modal>
            <img src={modal}/>
        </Modal>
      }
    </Wrapper>
  );
};

DynamicComponentCard.defaultProps = {
  children: null,
  friendlyName: '',
  onClick: () => {},
  icon: 'smile',
};

DynamicComponentCard.propTypes = {
  children: PropTypes.node,
  componentUid: PropTypes.string.isRequired,
  friendlyName: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default DynamicComponentCard;
