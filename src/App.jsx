// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contexts
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import { ShortcutContextProvider } from '@/contexts/ShortcutContext';
import { FastDialogContextProvider } from "@/contexts/FastDialogContext";
import { FastAlertContextProvider } from '@/contexts/FastAlertContext';
import { ExtensibleDialogContextProvider } from '@/contexts/ExtensibleDialogContext';
import { VersionContextProvider } from '@/contexts/VersionContext';
import { AuthContextProvider } from "@/contexts/AuthContext";
import { ThemeContextProvider } from '@/contexts/ThemeContext';

// Components
import PrivateRoute from '@/components/PrivateRoute';
import Layout from '@/components/Layout';

// Pages
import RootPage from "@/pages/Root/page";
import NotFoundPage from '@/pages/NotFound/page';
import UnauthorizedPage from '@/pages/Unauthorized/page';
import LoginPage from '@/pages/Login/page';
import HomePage from '@/pages/Home/page';
import VersionPage from '@/pages/Version/page';

export default function App() {
	return (
		<ThemeContextProvider>
			<ShortcutContextProvider>
				<FastAlertContextProvider>
					<FastDialogContextProvider>
						<ExtensibleDialogContextProvider>
							<LoaderContextProvider>
								<BrowserRouter>
									<AuthContextProvider>
										<VersionContextProvider>
											<Routes>
												<Route
													path="/"
													element={
														<RootPage />
													}
												/>
												<Route
													path="/home"
													element={
														<PrivateRoute>
															<Layout>
																<HomePage />
															</Layout>
														</PrivateRoute>
													}
												/>
												<Route
													path="/version"
													element={
														<PrivateRoute>
															<Layout>
																<VersionPage />
															</Layout>
														</PrivateRoute>
													}
												/>
												<Route
													path="/login"
													element={
														<LoginPage />
													}
												/>
												<Route
													path="/unauthorized"
													element={
														<UnauthorizedPage />
													}
												/>
												<Route
													path='*'
													element={
														<NotFoundPage />
													}
												/>
											</Routes>
										</VersionContextProvider>
									</AuthContextProvider>
								</BrowserRouter>
							</LoaderContextProvider>
						</ExtensibleDialogContextProvider>
					</FastDialogContextProvider>
				</FastAlertContextProvider>
			</ShortcutContextProvider>
		</ThemeContextProvider>
	)
}
