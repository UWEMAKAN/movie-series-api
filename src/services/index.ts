import { Router } from 'express';
import IFactory from '../factory/IFactory';
// import customerRoutes from './customers/CustomerRoutes';
// import employeeRoutes from './employees/EmployeeRoutes';
// import productRoutes from './products/ProductRoutes';
// import saleRoutes from './sales/SaleRoutes';


function apiRouter(dependencies: IFactory): Router {
  const routes = Router();

  const customerRouter = customerRoutes(dependencies);
  const employeeRouter = employeeRoutes(dependencies);
  const productRouter = productRoutes(dependencies);
  const saleRouter = saleRoutes(dependencies);

  routes.use('/customers', customerRouter);
  routes.use('/employees', employeeRouter);
  routes.use('/products', productRouter);
  routes.use('/sales', saleRouter);

  return routes;
};

export default apiRouter;
