import type { ProjectType } from './carbon';

export interface ProjectFilters {
  types: ProjectType[];
  locations: string[];
  priceRange: {
    min: number;
    max: number;
  };
  coBenefits: string[];
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export interface FilterSidebarProps {
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
  availableTypes: ProjectType[];
  availableLocations: string[];
  availableCoBenefits: string[];
  priceRange: {
    min: number;
    max: number;
  };
  isOpen?: boolean;
  onClose?: () => void;
}

export function createDefaultFilters(priceRange?: { min: number; max: number }): ProjectFilters {
  return {
    types: [],
    locations: [],
    priceRange: priceRange || {
      min: 0,
      max: 100,
    },
    coBenefits: [],
  };
}

export const DEFAULT_FILTERS: ProjectFilters = createDefaultFilters();
