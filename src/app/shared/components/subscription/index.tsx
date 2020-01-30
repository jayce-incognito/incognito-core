import * as React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { translateSelector } from 'src/i18n';
import { InputEmail } from 'src/core/components/input';
import { subscribe } from './api';
import { actionToggleNotifications as toggleToast } from 'src/core/components/nofitications';
import { isEmailValid } from 'src/core/components/input';
import ErrorBoundary from 'src/core/components/errorBound';
import { Notifications } from 'src/core/components/nofitications';

interface IProps {}

const Styled = styled.div`
  &.subscription-container {
    background-color: #0f3435;
    border-radius: 8px;
    padding: 50px 20px;
    .title {
      font-size: 32px;
      line-height: 40px;
      color: #fff;
    }
    .desc {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      margin: 30px 0;
      text-align: center;
    }
    .form-container {
      display: flex;
      max-width: 620px;
      margin: auto;
    }
    .input-container {
    }
  }
`;

const Subscription = (props: IProps) => {
  const dispatch = useDispatch();
  const { node, errors } = useSelector(translateSelector);
  const { title, desc, form } = node.subContainer;
  const [state, setState] = React.useState({
    isFetching: false,
    isFetched: false,
    data: {
      Email: '',
      ReferralCode: '',
      From: ''
    }
  });
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    if (!isEmailValid(state.data.Email)) {
      return await dispatch(
        toggleToast({
          toggle: true,
          type: 'error',
          data: errors.validEmail
        })
      );
    }
    if (!state.isFetching) {
      try {
        await setState({ ...state, isFetching: true });
        const { data } = await subscribe(state.data);
        await setState({
          ...state,
          isFetched: true,
          isFetching: false
        });
        await dispatch(
          toggleToast({
            toggle: true,
            data: form.msgSubSuccess
          })
        );
      } catch (error) {
        await setState({
          ...state,
          isFetching: false,
          isFetched: false
        });
        await dispatch(
          toggleToast({
            toggle: true
          })
        );
      }
    }
  };
  return (
    <ErrorBoundary>
      <Styled className='subscription-container'>
        <p className='title title-with-underline'>{title}</p>
        <p className='desc'>{desc}</p>
        <form className='form-container' action='' onSubmit={handleOnSubmit}>
          <InputEmail
            placeholder={form.inputEmail}
            onChange={(e: any) =>
              setState({
                ...state,
                data: { ...state.data, Email: e.target.value }
              })
            }
          />
          <button
            className={`btn-container btn-submit ${
              state.isFetching ? 'loading' : ''
            }`}
            type='submit'
          >
            {state.isFetching ? form.btnLoading : form.btnSubmit}
          </button>
        </form>
      </Styled>
      <Notifications />
    </ErrorBoundary>
  );
};

export default React.memo(Subscription);
