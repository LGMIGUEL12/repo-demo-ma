import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import Button from '~/core/ui/Button';
import configuration from '~/configuration';
import isBrowser from '~/core/generic/is-browser';
import useGetCsrfToken from '~/core/firebase/hooks/use-get-csrf-token';
import ClientOnly from '~/core/ui/ClientOnly';

const CHECKOUT_SESSION_API_ENDPOINT = configuration.paths.api.checkout;

const CheckoutRedirectButton: React.FCC<{
  disabled?: boolean;
  priceId: Maybe<string>;
  organizationId: Maybe<string>;
  customerId: Maybe<string>;
}> = ({ children, ...props }) => {
  return (
    <form
      data-cy={'checkout-form'}
      action={CHECKOUT_SESSION_API_ENDPOINT}
      method="POST"
    >
      <ClientOnly>
        <CheckoutFormData
          customerId={props.customerId}
          organizationId={props.organizationId}
          priceId={props.priceId}
        />
      </ClientOnly>

      <Button
        size={'large'}
        color={'primary'}
        type="submit"
        disabled={props.disabled}
      >
        <span className={'flex items-center space-x-2'}>
          <span>{children}</span>

          <ArrowRightIcon className={'h-6'} />
        </span>
      </Button>
    </form>
  );
};

export default CheckoutRedirectButton;

function CheckoutFormData(
  props: React.PropsWithChildren<{
    organizationId: Maybe<string>;
    priceId: Maybe<string>;
    customerId: Maybe<string>;
  }>
) {
  const getCsrfToken = useGetCsrfToken();

  return (
    <>
      <input
        type="hidden"
        name={'organizationId'}
        defaultValue={props.organizationId}
      />

      <input
        type="hidden"
        name={'csrfToken'}
        defaultValue={getCsrfToken() ?? ''}
      />

      <input type="hidden" name={'returnUrl'} defaultValue={getReturnUrl()} />
      <input type="hidden" name={'priceId'} defaultValue={props.priceId} />

      <input
        type="hidden"
        name={'customerId'}
        defaultValue={props.customerId}
      />
    </>
  );
}

function getReturnUrl() {
  return isBrowser()
    ? [window.location.origin, window.location.pathname].join('')
    : undefined;
}
