import * as React from 'react';
import ErrorBoundary from 'src/core/components/errorBound';
import { useSelector, useDispatch } from 'react-redux';
import { IState as INotifications } from './notifications.reducer';
import styled from 'styled-components';
import { actionToggleNotifications } from './notifications.actions';
import { delay } from 'src/core/utils';

interface IProps {}

const Styled = styled.div`
  background-color: #0dc7d8;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 300px;
  border-radius: 0 0 0 4px;
  transition: all 0.7s linear;
  transform: translateX(300px);
  opacity: 0;
  &.error {
    background-color: #f40000;
  }
  &.show-toast {
    transform: translateX(0);
    transition: all 0.7s linear;
    opacity: 1;
    padding: 20px;
  }
  .message {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Notifications = (props: IProps) => {
  const dispatch = useDispatch();
  const notifications: INotifications = useSelector(
    (state: any) => state.notifications
  );
  const { toggle, data, type } = notifications;
  React.useEffect(() => {
    eventToggleToast();
  }, [toggle]);
  const eventToggleToast = async () => {
    if (toggle) {
      await delay(3000);
      await dispatch(
        actionToggleNotifications({
          toggle: false,
          data: null,
          type: ''
        })
      );
    }
  };
  return (
    <ErrorBoundary>
      <Styled className={`toast ${type} ${toggle ? 'show-toast' : ''}`}>
        <p className='message'>{data}</p>
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Notifications);
