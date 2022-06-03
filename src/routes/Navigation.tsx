import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";

import { Route as IRoute, routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {routes.map(({ to, name }: IRoute) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }: IRoute) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};
