import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	webpack(config) {
		// Configuramos el alias para que '@' apunte a la raíz del proyecto
		config.resolve.alias['@'] = path.resolve(__dirname);
		return config;
	},
	// otras configuraciones si las necesitas
};

export default nextConfig;
