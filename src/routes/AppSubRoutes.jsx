import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'dva/router';
import PageLoading from '@/pages/Prompt/PageLoading';
import MyBoundaryError from '@/pages/Prompt/MyBoundaryError';

// 基于路由的组件分片
function LoadableImportPage(dirName) {
    return loadable(() => import(`@/pages/${dirName}`));
};

// 如果需要使用'/'必须将它放到最后面,不能使用精准匹配 或者是放到最前面
// 放到最前面不会匹配到 /App/xx任何路由, 添加为精准匹配exact将会读取不到任何路由
export default function SubRoutes() {
    return (
        <Suspense fallback={<PageLoading />}>
            <MyBoundaryError>
                <section className="app-container">
                    <Switch>
                        <Route path="/App/shipment" component={LoadableImportPage('Shipment')} />
                        <Route path="/" component={LoadableImportPage('Home')} />
                    </Switch>
                </section>
            </MyBoundaryError>
        </Suspense>
    )
};