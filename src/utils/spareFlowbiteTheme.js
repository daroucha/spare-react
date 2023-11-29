const spareFlowbiteTheme = {
  navbar: {
    root: {
      base: 'bg-white py-6 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
      },
    },
    link: {
      base: 'block py-2 px-4 text-base rounded-full transition duration-100 ease-linear',
      active: {
        on: 'bg-spare-gray-5 font-semibold text-spare-gray-100 dark:text-white',
        off: 'rounded-lg font-normal text-spare-gray-50 hover:shadow-stroke-md',
      },
    },
    collapse: {
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-1 md:text-sm md:font-medium',
    },
  },
  footer: {
    root: {
      base: 'w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between',
    },
  },
  textInput: {
    field: {
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2',
        svg: 'w-4 h-4 text-spare-gray-60 dark:text-gray-400',
      },
      input: {
        base: 'block w-full rounded-none',
        sizes: {
          sm: 'px-2 py-1 h-8 sm:text-sm',
        },
        colors: {
          gray: 'bg-white border-spare-stroke-primary placeholder-spare-gray-50 text-spare-gray-80 focus:border-spare-primary',
        },
        withIcon: {
          on: 'pl-8',
        },
        withRightIcon: {
          on: 'pr-8',
        },
        withAddon: {
          off: 'rounded',
        },
      },
    },
  },
  button: {
    color: {
      info: 'text-white bg-spare-primary enabled:hover:shadow-stroke-lg enabled:hover:bg-spare-blue-40 enabled:active:bg-spare-blue-70 enabled:active:shadow-stroke-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-100 ease-linear',
      gray: 'text-spare-primary bg-white shadow-stroke-sm enabled:hover:shadow-stroke-lg enabled:active:bg-spare-gray-15 enabled:active:shadow-stroke-sm focus:text-spare-primary dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2',
    },
    pill: {
      off: 'rounded-lg',
    },
    size: {
      md: 'text-sm px-4 h-10',
    },
  },
}

export default spareFlowbiteTheme
