import React from 'react';
import cxs from 'cxs/monolithic';
import prefixer from 'inline-style-prefixer/static';
import { spacing, measure } from '../config'


const View = ({ children, display = 'block', maxHeight, width, maxWidth, height, clear, flexAuto, flexJustify, flexColumn, mt, mb, ml, mr, m, pt, pb, pl, pr, p, ...props }) => {


    const prefixed = prefixer({
        display: display,
        width: width ? width : null,
        maxWidth: maxWidth ? measure[maxWidth] : null,
        clear: clear,
        height: height ? height : 'auto',
        maxHeight: maxHeight ? maxHeight : null,
        flex: flexAuto ? '1 1 auto' : null,
        flexDirection: flexColumn ? 'column' : null,
        justifyContent: flexJustify ?  flexJustify : null,
        marginTop: mt ? spacing[mt] : null ,
        marginBottom: mb ? spacing[mb] : null ,
        marginLeft: ml ? spacing[ml] : null ,
        marginRight: mr ? spacing[mr] : null ,
        margin: m ? spacing[m] : null ,
        paddingTop: pt ? spacing[pt] : null ,
        paddingBottom: pb ? spacing[pb] : null ,
        paddingLeft: pl ? spacing[pl] : null ,
        paddingRight: pr ? spacing[pr] : null ,
        padding: p ? spacing[p] : null ,
    })

    const cx = cxs(prefixed);

    return (
        <div className={cx} {...props}> {children} </div>
    );
}

export default View


