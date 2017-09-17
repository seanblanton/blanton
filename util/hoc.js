const create = require('react').createElement

export default () => {
  return ( {children, ...otherProps} ) => {
    const tag = otherProps['as'] || 'div';
    const { as, config, ...props } = otherProps

    return create(tag, props, children)
  }
}
